package com.github.damianw345.wineprices.rest.client;

import com.github.damianw345.wineprices.domain.ExchangeRate;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "exchangeRatesApiClient", url = "https://api.exchangeratesapi.io")
public interface ExchangeRatesApiClient {

    @GetMapping(path = "/latest")
    ExchangeRate getLatestExchangeRate(
            @RequestParam(name = "base", required = false, defaultValue = "USD") String base
    );
}
