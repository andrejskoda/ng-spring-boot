package sk.assignement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sk.assignement.model.Event;

public interface EventRepository extends JpaRepository<Event, Integer> {

}
