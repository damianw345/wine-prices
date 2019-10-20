package com.github.damianw345.wineprices.rest.ctrl;

import com.github.damianw345.wineprices.domain.Wine;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface WineRestRepository extends PagingAndSortingRepository<Wine, Long> {

}
