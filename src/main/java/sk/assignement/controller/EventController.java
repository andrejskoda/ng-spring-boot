package sk.assignement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import sk.assignement.model.Event;
import sk.assignement.repository.EventRepository;

@RestController
@RequestMapping("/events")
public class EventController {
  @Autowired
  private EventRepository repo;
  
  @RequestMapping(method = RequestMethod.GET)
  public List<Event> findItems() {
    return repo.findAll();
  }
  
  @RequestMapping(method = RequestMethod.POST)
  public Event addEvent(@RequestBody Event event) {
    event.setId(null);
    return repo.saveAndFlush(event);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public Event updateItem(@RequestBody Event updatedEvent, @PathVariable Integer id) {
    updatedEvent.setId(id);
    return repo.saveAndFlush(updatedEvent);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deleteEvent(@PathVariable Integer id) {
    repo.delete(id);
  }
}
