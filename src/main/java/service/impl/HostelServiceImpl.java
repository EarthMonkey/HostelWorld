package service.impl;

import common.RespInfo;
import dao.HostelInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.HostelService;

import javax.transaction.Transactional;

/**
 * Created by L.H.S on 2017/3/12.
 */

@Service("hostelService")
@Transactional
public class HostelServiceImpl implements HostelService{

    @Autowired
    private HostelInfoDao hostelInfoDao;

    public RespInfo hostelLogin(int hostelId, String pwd) {

        RespInfo respInfo = hostelInfoDao.getPwd(hostelId);

        if (respInfo.getStatus()) {
            if (respInfo.getInfo().equals(pwd)) {
                return new RespInfo(true, "", "");
            } else {
                return new RespInfo(false, "密码错误", "");
            }
        } else {
            return new RespInfo(false,"无效的客栈编号", "");
        }
    }
}
