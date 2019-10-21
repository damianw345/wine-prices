package com.github.damianw345.wineprices.rest.ctrl;

import com.github.damianw345.wineprices.domain.Wine;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
public interface WineRestRepository extends PagingAndSortingRepository<Wine, Long> {

}
