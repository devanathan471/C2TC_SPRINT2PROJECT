package com.tnsif.mallshopowner.repository;

import com.tnsif.mallshopowner.entity.ShopOwnerApplication;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ShopOwnerRepository extends JpaRepository<ShopOwnerApplication, Long> {
}