package common;

import java.util.List;

/**
 * Created by L.H.S on 2017/3/15.
 */
public class TotalFinance {

    private List hostelNames;
    private List<List> sales;

    public TotalFinance() {
    }

    public TotalFinance(List hostelNames, List<List> sales) {
        this.hostelNames = hostelNames;
        this.sales = sales;
    }

    public List getHostelNames() {
        return hostelNames;
    }

    public void setHostelNames(List hostelNames) {
        this.hostelNames = hostelNames;
    }

    public List<List> getSales() {
        return sales;
    }

    public void setSales(List<List> sales) {
        this.sales = sales;
    }
}
