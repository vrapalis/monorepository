package behavioral.strategy;

import com.vrapalis.www.backend.tutorials.designpatterns.behavioral.strategy.Food;
import com.vrapalis.www.backend.tutorials.designpatterns.behavioral.strategy.Furniture;
import com.vrapalis.www.backend.tutorials.designpatterns.behavioral.strategy.Product;
import com.vrapalis.www.backend.tutorials.designpatterns.behavioral.strategy.ProductUtils;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.time.OffsetDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;

@DisplayName("Strategy pattern test group")
public class StrategyPatternTestGroup {
    List<Product> products;
    Food apple, expiredMilk, egg;
    Furniture table;

    @BeforeEach
    void setUp() {
        expiredMilk = new Food("Egg", 2.20, OffsetDateTime.parse("2022-01-24T10:15:30+01:00"));
        apple = new Food("Apple", 2.20, OffsetDateTime.parse("2022-01-26T10:15:30+01:00"));
        egg = new Food("Milk", 1.50, OffsetDateTime.parse("2022-01-26T10:15:30+01:00"));
        table = new Furniture("Table", 120, OffsetDateTime.parse("2025-12-03T10:15:30+01:00"));
        products = Arrays.asList(apple, expiredMilk, egg, table);
    }

    @Nested
    @DisplayName("Filter food products")
    class StrategyPatternFoodProductsTest {
        // Given predicate
        Predicate<Product> expiredFoodProducts = product -> (product instanceof Food)
                && (product.getExpireDate().isAfter(OffsetDateTime.now()));

        @BeforeEach
        void setUp() {
            // Given products
            products.forEach(product -> product.setFilterPredicate(expiredFoodProducts));
        }

        @Test
        @DisplayName("Filter only foods end expired products")
        void filterExpiredAndOnlyFoodProducts() {
            // When
            final var filteredProducts = ProductUtils.filter(products);

            // Then
            Assertions.assertThat(filteredProducts).doesNotContain(table, expiredMilk);
        }
    }

    @Nested
    @DisplayName("Filter furniture products")
    class StrategyPatternFurnitureProductsTest {
        // Given predicate
        Predicate<Product> onlyFurniturePredicate = product -> product instanceof Furniture;

        @BeforeEach
        void setUp() {
            products.forEach(product -> product.setFilterPredicate(onlyFurniturePredicate));
        }

        @Test
        @DisplayName("Filter only furniture products")
        void filterOnlyFurnitureProducts() {
            // When
            products = ProductUtils.filter(products);
            // Then
            Assertions.assertThat(products).doesNotContain(expiredMilk, apple, egg);
        }

        @Test
        @DisplayName("Print only furniture products")
        void printOnlyFurnitureProducts() {
            // Given
            Function<Product, String> printFurnitureFunction = product ->
                    String.format("Furniture %s expired date is %s", product.getName(), product.getExpireDate().toString());
            products.forEach(product -> {
                product.setFilterPredicate(pr -> pr instanceof Furniture);
                product.setPrint(printFurnitureFunction);
            });

            // When
            final var printedFurnitureList = ProductUtils.printList(products);
            Assertions.assertThat(printedFurnitureList).isNotEmpty();
        }
    }
}
