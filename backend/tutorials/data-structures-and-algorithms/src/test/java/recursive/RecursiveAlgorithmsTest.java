package recursive;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Recursive algorithms tests group")
public class RecursiveAlgorithmsTest {
    @Test
    @DisplayName("Given number of 3 should the sum to 6 (3 + 2 + 1)")
    void recursiveSumTest() {
        Assertions.assertThat(recursSum(3)).isEqualTo(6);
    }

    private Integer recursSum(int i) {
        if (i == 1) {
            return 1;
        }
        return i + recursSum(i - 1);
    }

    @Test
    @DisplayName("Given exp 3 to 2 num then, should be 8 (2*2*2)")
    void recursiveExpTest() {
        Assertions.assertThat(recursExp(3)).isEqualTo(8);
    }

    private Integer recursExp(int i) {
        if (!(i > 0)) {
            return 1;
        }
        return 2 * recursExp(i - 1);
    }
}
