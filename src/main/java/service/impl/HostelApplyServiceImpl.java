package service.impl;

import dao.HostelApplyDao;
import model.HostelApply;
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

    public void updateState(int applyId, String state, int approverId) {
        applyDao.updateState(applyId, state, approverId);
    }
}
