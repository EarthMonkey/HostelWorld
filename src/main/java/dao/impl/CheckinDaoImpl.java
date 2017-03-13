package dao.impl;

import common.RespInfo;
import dao.CheckinDao;
import model.CheckIn;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by L.H.S on 2017/3/9.
 */

@Repository
public class CheckinDaoImpl implements CheckinDao{

    @Autowired
    private SessionFactory sessionFactory;

    public void insert(CheckIn checkIn) {

        sessionFactory.getCurrentSession().save(checkIn);
    }

    public CheckIn getCheck(int hosId, int roomId) {

        Session session = sessionFactory.getCurrentSession();
        String hql = "from CheckIn c where c.roomId=" + roomId + " and c.hostelId=" + hosId + " and c.state='valid'";
        List<CheckIn> list =  session.createQuery(hql).list();

        if (list.size() == 0) {
            return null;
        } else {
            return list.get(0);
        }
    }

    // 离店时更新
    public void updateState(int hosId, int roomId) {

        CheckIn checkIn = getCheck(hosId, roomId);
        if (checkIn != null) {
            checkIn.setState("invalid");
        }

        sessionFactory.getCurrentSession().update(checkIn);
    }
}
