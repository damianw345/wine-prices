package com.github.damianw345.wineprices.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity(name = "wines")
public class Wine {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String country;
    private String description;
    private String designation;
    private String points;
    private String price;
    private String province;
    @Column(name = "region_1")
    private String firstRegion;
    @Column(name = "region_2")
    private String secondRegion;
    @Column(name = "taster_name")
    private String tasterName;
    @Column(name = "taster_twitter_handle")
    private String tasterTwitterHandle;
    private String title;
    private String variety;
    private String winery;
}
