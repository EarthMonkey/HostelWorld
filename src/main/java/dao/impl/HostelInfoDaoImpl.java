package dao.impl;

import common.RespInfo;
import dao.HostelInfoDao;
import model.HostelApply;
import model.HostelInfo;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Created by L.H.S on 2017/3/9.
 */

@Repository
public class HostelInfoDaoImpl implements HostelInfoDao {

    @Autowired
    private SessionFactory sessionFactory;

    public RespInfo getPwd(int hosId) {

        HostelInfo hosInfo = (HostelInfo) sessionFactory.getCurrentSession().get(HostelInfo.class, hosId);

        if (hosInfo != null) {
            return new RespInfo(true, hosInfo.getPassword(), "");
        } else {
            return new RespInfo(false, "无效的客栈编号", "");
        }
    }

    public HostelInfo getInfo(int hosId) {

        HostelInfo hosInfo = (HostelInfo) sessionFactory.getCurrentSession().get(HostelInfo.class, hosId);
        return hosInfo;
    }

    public void updateInfo(HostelApply ha) {

        Session session = sessionFactory.getCurrentSession();
        HostelInfo hosInfo = (HostelInfo) session.load(HostelInfo.class, Integer.parseInt(ha.getIdentity()));

        hosInfo.setOwnername(ha.getApplyer());
        hosInfo.setPhone(ha.getPhone());
        hosInfo.setEmail(ha.getEmail());
        hosInfo.setLocation(ha.getLocation());
        hosInfo.setName(ha.getHostelname());
        hosInfo.setDescription(ha.getDescription());
        hosInfo.setNotice(ha.getNotice());
    }
}
