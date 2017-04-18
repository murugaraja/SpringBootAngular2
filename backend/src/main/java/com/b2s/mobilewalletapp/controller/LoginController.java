package com.b2s.mobilewalletapp.controller;
import com.b2s.mobilewalletapp.Model.User;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/login", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody boolean login(@RequestParam("username") String username, @RequestParam("password") String password) {
        boolean access = false;
        if(username.contains("b2s")){
            access = true;
        }
        return access;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/getUser", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody User getUser(@RequestParam("memberId") String memberId) {
        User user = new User();
        user.setMemberId("8910231014805363");
        user.setLastName("PJYYRY");
        user.setFirstName("BQFYA");
        user.setAccountId("0001341495_4554");
        user.setCellPhone("3485803300");
        user.setCustomRewardsEligibility("Y");
        user.setEmail("thicks@bridge2solutions.com");
        user.setMemberStatus("A");
        user.setMiddleInitial("J");
        user.setPointBalance("633947");
        user.setToken("hedr4cg3ZSC");
        user.setProgramId("5634545");
        user.setVarProgram("PLTM");
        return user;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/enrol", method = RequestMethod.POST)
    public @ResponseBody String testGetJson1(@RequestBody String user) {
        System.out.print(user);
        String authCode = "hngtvfredcfvgbhn";
        return authCode;
    }
}