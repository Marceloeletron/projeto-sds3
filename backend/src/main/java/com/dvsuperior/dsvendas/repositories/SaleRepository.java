package com.dvsuperior.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dvsuperior.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
