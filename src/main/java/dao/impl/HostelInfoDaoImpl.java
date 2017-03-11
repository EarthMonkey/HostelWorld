package dao.impl;

import common.RespInfo;
import dao.HostelInfoDao;
import model.HostelInfo;
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
}
