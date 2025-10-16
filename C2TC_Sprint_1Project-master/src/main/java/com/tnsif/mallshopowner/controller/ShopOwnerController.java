package com.tnsif.mallshopowner.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tnsif.mallshopowner.entity.ShopOwnerApplication;
import com.tnsif.mallshopowner.service.ShopOwnerService;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("shopowners")
public class ShopOwnerController {
    private final ShopOwnerService service;
    public ShopOwnerController(ShopOwnerService service) { this.service = service; }

    @GetMapping
    public List<ShopOwnerApplication> all() { return service.findAll(); }

    @GetMapping("/{id}")
    public ResponseEntity<ShopOwnerApplication> get(@PathVariable Long id) {
        return service.findById(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ShopOwnerApplication> create(@RequestBody ShopOwnerApplication s) {
        ShopOwnerApplication saved = service.save(s);
        return ResponseEntity.created(URI.create("/api/shopowners/" + saved.getId())).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ShopOwnerApplication> update(@PathVariable Long id, @RequestBody ShopOwnerApplication s) {
        return service.findById(id).map(existing -> {
            existing.setName(s.getName()); existing.setEmail(s.getEmail()); existing.setPhone(s.getPhone()); existing.setShopName(s.getShopName());
            service.save(existing);
            return ResponseEntity.ok(existing);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}