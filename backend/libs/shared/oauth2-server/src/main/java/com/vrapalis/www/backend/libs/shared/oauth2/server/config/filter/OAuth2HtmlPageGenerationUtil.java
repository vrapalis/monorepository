package com.vrapalis.www.backend.libs.shared.oauth2.server.config.filter;

import lombok.experimental.UtilityClass;
import lombok.extern.log4j.Log4j2;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

@Log4j2
@UtilityClass
public class OAuth2HtmlPageGenerationUtil {

    protected static void generateRegistrationCodeHtmlErrorPage(HttpServletResponse response) {
        final var pageBuilder = new StringBuilder();
        pageBuilder.append("<h1 class=\"col-12 fs-1 text-opacity-50 text-primary\">\n");
        pageBuilder.append("<i class=\"bi bi-emoji-frown\"></i>\n");
        pageBuilder.append("<span class=\"ms-2\">Registration Error!!!</span>\n");
        pageBuilder.append("</h1>\n");
        try {
            prepareHttpResponse(response, pageBuilder.toString(), "<meta http-equiv=\"refresh\" content=\"3; URL=/registration\">");
        } catch (IOException e) {
            log.error(e.getMessage());
        }
    }

    protected HttpServletResponse prepareHttpResponse(HttpServletResponse response, String pageFragment, String meta) throws IOException {
        response.setContentType("text/html;charset=UTF-8");
        final var generateHtmlPage = generateHtmlPage(pageFragment, meta);
        response.setContentLength(generateHtmlPage.getBytes(StandardCharsets.UTF_8).length);
        response.getWriter().write(generateHtmlPage);
        return response;
    }

    protected String generateHtmlPage(String pageFragment, String meta) {
        final var page = new StringBuilder();
        page.append("<!DOCTYPE html>\n");
        page.append("<html lang=\"en\" style=\"height:100%;\">\n");
        page.append("  <head>\n");
        page.append("    <meta charset=\"utf-8\">\n");
        page.append("    <meta name=\"viewport\" content=\"width=device-width initial-scale=1 shrink-to-fit=no\">\n");
        page.append("    <meta name=\"description\" content=\"\">\n");
        page.append("    <meta name=\"author\" content=\"\">\n");
        page.append(meta + "\n");
        page.append("    <title>Registration Successful</title>\n");
        page.append("    <link href=\"/webjars/bootstrap/5.0.0/css/bootstrap.min.css\" "
                + "rel=\"stylesheet\" crossorigin =\"anonymous\">\n");
        page.append("<link href=\"webjars/bootstrap-icons/1.7.0/font/bootstrap-icons.css\" " +
                "rel=\"stylesheet\" crossorigin =\"anonymous\" \n");
        page.append("    <link href=\"/main.css\" "
                + "rel=\"stylesheet\" crossorigin=\"anonymous\"/>\n");
        page.append("  </head>\n");
        page.append("  <body style=\"height:100%;\">\n");
        page.append("<div class=\"row justify-content-center align-content-center\" style=\"width:50%;margin:auto;height:100%\">\n");
        page.append(pageFragment);
        page.append("</div>\n");
        page.append("  </body>\n");
        page.append("</html>");
        return page.toString();
    }

    public static void generateRegistrationCodeHtmlSuccessPage(HttpServletResponse response) {
        final var pageBuilder = new StringBuilder();
        pageBuilder.append("<h1 class=\"col-12 fs-1 text-opacity-50 text-primary\">\n");
        pageBuilder.append("<i class=\"bi bi-emoji-wink\"></i>\n");
        pageBuilder.append("<span class=\"ms-2\">Registration Success!!!</span>\n");
        pageBuilder.append("</h1>\n");
        try {
            prepareHttpResponse(response, pageBuilder.toString(), "<meta http-equiv=\"refresh\" content=\"3; URL=/login\">");
        } catch (IOException e) {
            log.error(e.getMessage());
        }
    }
}
