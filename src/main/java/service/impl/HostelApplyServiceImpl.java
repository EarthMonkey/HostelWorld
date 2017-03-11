package service.impl;

import common.RespInfo;
import dao.HostelApplyDao;
import dao.HostelRegisterDao;
import model.HostelApply;
import model.HostelInfo;
import model.HostelRegister;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.HostelApplyService;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by L.H.S on 2017/3/11.
 */
@Service("applyService")
@Transactional
public class HostelApplyServiceImpl implements HostelApplyService {

    @Autowired
    private HostelApplyDao applyDao;
    @Autowired
    private HostelRegisterDao registerDao;

    public void apply(String applyer, String phone,
                      String email, String identity, String hostelname,
                      String location, String description, String imgurl) {

        Date today = new Date();
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        HostelApply apply = new HostelApply(applyer, phone, email, identity, hostelname, location,
                description, imgurl, "unchecked", "open", df.format(today));

        applyDao.insert(apply);
    }

    public List<HostelApply> getApply() {
        return applyDao.getApply();
    }

    public List<HostelApply> getHistoryApply() {
        return applyDao.getHistory();
    }

    public void updateState(int applyId, String state, int approverId) {
        applyDao.updateState(applyId, state, approverId);

        // 若同意，生成验证码， 并发送邮件
        char code1 = (char) ('A' + (int) Math.random() * 26);
        char code2 = (char) ('A' + (int) Math.random() * 26);
        char code3 = (char) ('A' + (int) Math.random() * 26);
        int codeId = applyId % 1000;
        String checkCode = String.valueOf(code1) + codeId + "" + String.valueOf(code2);
        if (codeId < 10) {
            checkCode += (codeId + "" + String.valueOf(code3) + codeId + "");
        } else if (codeId < 100) {
            checkCode += (String.valueOf(code2) + String.valueOf(code3));
        } else {
            checkCode += String.valueOf(code3);
        }

        HostelRegister register = new HostelRegister(checkCode, applyId, "notReg");
        registerDao.insert(register);
    }

    public RespInfo checkCode(String checkCode) {
        List<HostelRegister> registers = registerDao.checkCode(checkCode);
        HostelRegister reg = registers.get(0);

        if (registers.size() == 0 || reg.getState() == "reg") {
            return new RespInfo(false, "无效的验证码", "");
        } else {

            return new RespInfo(true, "", reg);
        }
    }

    // 更新register状态，拉取apply中的信息，存储到info
    public void setPwd(int regId, int applyId, String pwd) {

        registerDao.updateState(regId);
        HostelApply ha = applyDao.getTheApply(applyId);
        HostelInfo hi = new HostelInfo(applyId, pwd, ha.getHostelname(), ha.getLocation(),
                ha.getDescription(), ha.getApplyer(), ha.getPhone(), ha.getEmail(), "", 100);

        registerDao.insertInfo(hi);
    }
}
