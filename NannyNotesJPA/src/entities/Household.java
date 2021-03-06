package entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Household {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	@Column(name="parent_notes")
	private String parentNotes;
	@Column(name="nanny_notes")
	private String nannyNotes;
	@JsonBackReference(value="user-household")
	@ManyToMany(mappedBy="households", cascade=CascadeType.MERGE)
	private Set<User> users = new HashSet<User>();
	@OneToMany(mappedBy="household", cascade=CascadeType.MERGE)
	//@JsonBackReference(value="household-child")
	@JsonIgnore
	private Set<Child> children = new HashSet<Child>();
	@OneToMany(mappedBy="household", cascade=CascadeType.ALL)
	//@JsonManagedReference(value="household-event")
	@JsonIgnore
	//@JoinColumn(name="event_id")
	private Set<Event> events;

	public Household() {
	}

	public int getId() {
		return id;
	}
	
	public void setId(int id){
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getParentNotes() {
		return parentNotes;
	}

	public void setParentNotes(String parentNotes) {
		this.parentNotes = parentNotes;
	}

	public String getNannyNotes() {
		return nannyNotes;
	}

	public void setNannyNotes(String nannyNotes) {
		this.nannyNotes = nannyNotes;
	}

	public Set<User> getUsers() {
		return users;
	}
	public void setUsers(Set<User> users) {
		this.users = users;
	}
	
	public void addUser(User user){
		if(users == null) users = new HashSet<User>();
		if(!users.contains(user)) {
			users.add(user);
			//user.addHousehold(this);
		}
	}
	
	public void removeUser(User user){
		if(users != null && users.contains(user)) {
			users.remove(user);
			//user.removeHousehold(this);
		}
	}
	
	public Set<Child> getChildren() {
		return children;
	}
	
	public void setChildren(Set<Child> children) {
		this.children = children;
	}
	
	public void addChild(Child child){
		if(children == null) children = new HashSet<Child>();
		if(!children.contains(child)){
			children.add(child);
			child.setHousehold(this);
		}
	}
	
	public void removeChild(Child child){
		if(children != null && children.contains(child)){
			children.remove(child);
			child.setHousehold(null);
		}
	}

	public Set<Event> getEvents() {
		return events;
	}

	public void setEvents(Set<Event> events) {
		this.events = events;
	}

	@Override
	public String toString() {
		return "Household [id=" + id + ", name=" + name + ", parentNotes=" + parentNotes + ", nannyNotes=" + nannyNotes + "]";
	}
}
