package com.vrapalis.www.libs.security.web.domains.user;

import com.vrapalis.www.libs.security.dao.domains.user.LibsSecurityDaoUser;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@RequestMapping(value = LibsSecurityWebUserApiUrls.BASE_USER_API_URL_V1)
public interface LibsSecurityWebUserRestController {

    @PostMapping(value = LibsSecurityWebUserApiUrls.USER_API_LOGIN_URL_V1, produces = "application/json")
    @ApiOperation("User sign in")
//    @ApiResponses({
//            @ApiResponse(code = 200, message = "Authentication success",
//                    response = LibUaaSecurityUserAuthenticationSuccessResponseDao.class),
//            @ApiResponse(code = 400, message = "Authentication exception",
//                    response = LibUaaSecurityUserAuthenticationExceptionResponseDao.class),
//            @ApiResponse(code = 422, message = "Bean validation exception",
//                    response = LibUaaSecurityUserBeanValidationExceptionResponseDao.class)
//    })
    ResponseEntity signIn(@Valid @RequestBody LibsSecurityDaoUser signInUser, BindingResult result);
}
