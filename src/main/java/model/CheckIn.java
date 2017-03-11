package model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Created by L.H.S on 2017/3/9.
 */

@Entity
@Table(name = "checkin")
public class CheckIn implements Serializable {

    @Id
    private int id;
    private int roomId;
    private String checktime;
    private String leavetime;
    private String checkinstaff;
    private double pay;
    private String ismember;
    private String paytype;
    private int userId;

    public CheckIn() {}

    public CheckIn(int roomId, String checktime, String leavetime, String checkinstaff, double pay, String ismember, String paytype, int userId) {
        this.roomId = roomId;
        this.checktime = checktime;
        this.leavetime = leavetime;
        this.checkinstaff = checkinstaff;
        this.pay = pay;
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

    public String getChecktime() {
        return checktime;
    }

    public void setChecktime(String checktime) {
        this.checktime = checktime;
    }

    public String getLeavetime() {
        return leavetime;
    }

    public void setLeavetime(String leavetime) {
        this.leavetime = leavetime;
    }

    public String getCheckinstaff() {
        return checkinstaff;
    }

    public void setCheckinstaff(String checkinstaff) {
        this.checkinstaff = checkinstaff;
    }

    public double getPay() {
        return pay;
    }

    public void setPay(double pay) {
        this.pay = pay;
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
