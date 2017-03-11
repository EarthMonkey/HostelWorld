package controller;

import com.sun.org.apache.bcel.internal.generic.RETURN;
import common.RespInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import service.HostelApplyService;
import service.HostelService;

import javax.servlet.http.HttpSession;

/**
 * Created by L.H.S on 2017/3/11.
 */
@Controller
@RequestMapping("/hostel")
@ResponseBody
public class HostelController {

    @Autowired
    private HostelApplyService applyService;
    @Autowired
    private HostelService hostelService;

    @RequestMapping("/apply")
    public void apply(HttpSession session, @RequestParam String applyer, @RequestParam String phone,
                      @RequestParam String email, @RequestParam String identity, @RequestParam String hostelname,
                      @RequestParam String location, @RequestParam String description, @RequestParam String imgurl) {

        applyService.apply(applyer, phone, email, identity, hostelname, location, description, imgurl);
    }

    @RequestMapping("/checkCode")
    public RespInfo checkCode(HttpSession session, @RequestParam String checkcode) {

        return applyService.checkCode(checkcode);
    }

    @RequestMapping("/setPwd")
    public void setPwd(HttpSession session, @RequestParam int regId, @RequestParam int applyId, @RequestParam String pwd) {

        applyService.setPwd(regId, applyId, pwd);
    }

    @RequestMapping("/Login")
    public RespInfo login(HttpSession session, @RequestParam int hosId, @RequestParam String pwd) {
        RespInfo respInfo = hostelService.hostelLogin(hosId, pwd);
        if (respInfo.getStatus()) {
            session.setAttribute("hosId", hosId);
        }
        return respInfo;
    }
}