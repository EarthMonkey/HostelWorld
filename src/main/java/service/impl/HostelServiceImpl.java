package service.impl;

import common.RespInfo;
import dao.*;
import model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.HostelService;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by L.H.S on 2017/3/12.
 */

@Service("hostelService")
@Transactional
public class HostelServiceImpl implements HostelService {

    @Autowired
    private HostelInfoDao hostelInfoDao;
    @Autowired
    private HostelRoomDao roomDao;
    @Autowired
    private CheckinDao checkinDao;
    @Autowired
    private CheckoutDao checkoutDao;
    @Autowired
    private MyOrderDao orderDao;

    public RespInfo hostelLogin(int hostelId, String pwd) {

        RespInfo respInfo = hostelInfoDao.getPwd(hostelId);

        if (respInfo.getStatus()) {
            if (respInfo.getInfo().equals(pwd)) {
                return new RespInfo(true, "", "");
            } else {
                return new RespInfo(false, "密码错误", "");
            }
        } else {
            return new RespInfo(false, "无效的客栈编号", "");
        }
    }

    public HostelInfo getInfo(int hosId) {
        return hostelInfoDao.getInfo(hosId);
    }

    // 存储到checkin，更新room的empty
    public RespInfo checkIn(int hosId, int roomId, String checktime, String leavetime, String checkinstaff, double pay,
                            String ismember, String paytype, int memberId, int orderId) {

        if (orderId != -1) {
            // 更新order状态
            orderDao.updateOrder(orderId, roomId);
        }

        HostelRoom room = roomDao.getRoom(hosId, roomId);
        if (room != null) {

            if (room.getIsempty().equals("empty")) {
                CheckIn checkIn = new CheckIn(hosId, roomId, checktime, leavetime, checkinstaff, pay, ismember, paytype, memberId, orderId);
                checkIn.setState("valid");
                checkinDao.insert(checkIn);
                roomDao.updateState(hosId, roomId, "notempty");
                return new RespInfo(true, "登记成功", "");
            } else {
                return new RespInfo(false, "房间非空", "");
            }

        } else {
            return new RespInfo(false, "房间号不存在", "");
        }
    }

    public RespInfo getCheckIn(int hosId, int roomId) {

        CheckIn checkIn = checkinDao.getCheck(hosId, roomId);
        if (checkIn != null) {
            return new RespInfo(true, "", checkIn);
        } else {
            return new RespInfo(false, "搜索不到入住信息", "");
        }
    }

    // 更新checkin状态，和room状态
    public void checkOut(int hosId, int roomId, String checkouttime, String payinfo, double totalpay) {

        // 存储到checkout
        CheckIn checkIn = (CheckIn) getCheckIn(hosId, roomId).getObject();
        CheckOut checkout = new CheckOut(hosId, roomId, checkIn.getChecktime(), checkouttime,
                checkIn.getCheckinstaff(), totalpay, payinfo, checkIn.getUserId());
        checkoutDao.insert(checkout);

        checkinDao.updateState(hosId, roomId);
        roomDao.updateState(hosId, roomId, "empty");
    }

    public RespInfo getTheOrder(int orderId, int hosId) {

        MyOrder order = orderDao.getTheOrder(orderId);
        if (order != null) {
            if (order.getHostelId() == hosId) {
                return new RespInfo(true, "", order);
            } else {
                return new RespInfo(false, "非本店订单", "");
            }
        } else {
            return new RespInfo(false, "订单号不存在", "");
        }
    }

    public List<HostelInfo> searchHostel(String key, String condition) {

        if (condition.equals("location")) {
            return hostelInfoDao.getHostelByLocation(key);
        } else {
            return hostelInfoDao.getHostelByName(key);
        }
    }
}
