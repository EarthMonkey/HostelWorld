package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import service.HostelApplyService;

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

    @RequestMapping("/apply")
    public void apply(HttpSession session, @RequestParam String applyer, @RequestParam String phone,
                      @RequestParam String email, @RequestParam String identity, @RequestParam String hostelname,
                      @RequestParam String location, @RequestParam String description, @RequestParam String imgurl) {

        applyService.apply(applyer, phone, email, identity, hostelname, location, description, imgurl);
    }
}
