package com.github.damianw345.wineprices;

import com.github.damianw345.wineprices.domain.ExchangeRate;
import com.github.damianw345.wineprices.rest.client.ExchangeRatesApiClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
@Slf4j
public class WinePricesApplication implements CommandLineRunner {

    @Autowired
    private ExchangeRatesApiClient exchangeRatesApiClient;

    public static void main(String[] args) {
        SpringApplication.run(WinePricesApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        ExchangeRate exchangeRate = exchangeRatesApiClient.getLatestExchangeRate("");
        log.info(exchangeRate.toString());
    }
}
