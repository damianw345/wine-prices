package com.github.damianw345.wineprices.domain;

import lombok.Data;

import java.util.Map;

@Data
public class ExchangeRate {

    private Map<String, Double> rates;
    private String base;
    private String date;
}
