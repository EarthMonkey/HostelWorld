package controller;

import common.RespInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import service.UserService;

import javax.servlet.http.HttpSession;

/**
 * Created by L.H.S on 2017/3/10.
 */

@Controller
@RequestMapping(value = "/user", method = RequestMethod.POST)
@ResponseBody
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/register")
    public int register(HttpSession session, @RequestParam String password, @RequestParam String username, @RequestParam String phone, String email, @RequestParam String birth, @RequestParam String sex, @RequestParam String bankcard) {

        int userId = userService.userRegister(password, username, phone, email, birth, sex, bankcard);
        session.setAttribute("userId", userId);

        return userId;
    }

    @RequestMapping("/setPwd")
    public void setPwd(HttpSession session, @RequestParam String pwd) {

        int userId = (Integer) session.getAttribute("userId");
        userService.setPwd(userId, pwd);
    }

    @RequestMapping("/setBalance")
    public void setBalance(HttpSession session, @RequestParam double balance) {

        int userId = (Integer) session.getAttribute("userId");
        userService.setBalance(userId, balance);
    }

    @RequestMapping("/Login")
    public RespInfo login(HttpSession session, @RequestParam int userId, @RequestParam String pwd) {

        RespInfo respInfo = userService.userLogin(userId, pwd);
        if (respInfo.getStatus()) {
            session.setAttribute("userId", userId);
        }
        return respInfo;
    }

    @RequestMapping("/getUserInfo")
    public RespInfo getUserInfo(HttpSession session) {

        int userId = (Integer) session.getAttribute("userId");
        return userService.getUserInfo(userId);
    }

    @RequestMapping("/updateInfo")
    public void updateUserInfo(HttpSession session, @RequestParam String username, @RequestParam String sex, @RequestParam String birth, @RequestParam String phone, @RequestParam String email) {
        int userId = (Integer) session.getAttribute("userId");
        userService.userUpdate(userId, username, sex, birth, phone, email);
    }

    @RequestMapping("/updateBankcard")
    public void updateBankcard(HttpSession session, @RequestParam String bankcard) {
        int userId = (Integer) session.getAttribute("userId");
        userService.updateBankcard(userId, bankcard);
    }

}
