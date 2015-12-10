package sk.assignement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sk.assignement.model.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {

}
