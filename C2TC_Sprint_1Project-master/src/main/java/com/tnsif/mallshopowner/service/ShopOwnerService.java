package com.tnsif.mallshopowner.service;

import org.springframework.stereotype.Service;

import com.tnsif.mallshopowner.entity.ShopOwnerApplication;
import com.tnsif.mallshopowner.repository.ShopOwnerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ShopOwnerService {
    private final ShopOwnerRepository repo;
    public ShopOwnerService(ShopOwnerRepository repo) { this.repo = repo; }
    public List<ShopOwnerApplication> findAll() { return repo.findAll(); }
    public Optional<ShopOwnerApplication> findById(Long id) { return repo.findById(id); }
    public ShopOwnerApplication save(ShopOwnerApplication s) { return repo.save(s); }
    public void deleteById(Long id) { repo.deleteById(id); }
}