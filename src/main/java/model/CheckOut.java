package model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Created by L.H.S on 2017/3/9.
 */
@Entity
@Table(name = "checkout")
public class CheckOut implements Serializable {

    @Id
    private int id;
    private int roomId;
    private String checkintime;
    private String checkouttime;
    private String checkinstaff;  // 联系人1-手机号；联系人2-手机号
    private double totalpay;
    private String ismember;
    private String paytype;
    private int userId;

    public CheckOut(int roomId, String checkintime, String checkouttime, String checkinstaff, double totalpay, String ismember, String paytype, int userId) {
        this.roomId = roomId;
        this.checkintime = checkintime;
        this.checkouttime = checkouttime;
        this.checkinstaff = checkinstaff;
        this.totalpay = totalpay;
        this.ismember = ismember;
        this.paytype = paytype;
        this.userId = userId;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public String getCheckintime() {
        return checkintime;
    }

    public void setCheckintime(String checkintime) {
        this.checkintime = checkintime;
    }

    public String getCheckouttime() {
        return checkouttime;
    }

    public void setCheckouttime(String checkouttime) {
        this.checkouttime = checkouttime;
    }

    public String getCheckinstaff() {
        return checkinstaff;
    }

    public void setCheckinstaff(String checkinstaff) {
        this.checkinstaff = checkinstaff;
    }

    public double getTotalpay() {
        return totalpay;
    }

    public void setTotalpay(double totalpay) {
        this.totalpay = totalpay;
    }

    public String getIsmember() {
        return ismember;
    }

    public void setIsmember(String ismember) {
        this.ismember = ismember;
    }

    public String getPaytype() {
        return paytype;
    }

    public void setPaytype(String paytype) {
        this.paytype = paytype;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
