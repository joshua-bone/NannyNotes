package entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Shift {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@ManyToOne(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JsonBackReference
	@JoinColumn(name = "user_id")
	private User user;
	@ManyToOne(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JsonIgnore
	@JoinColumn(name = "household_id")
	private Household household;
	@Column(name="nanny_notes")
	private String nannyNotes;
	@Column(name="parent_notes")
	private String parentNotes;
	@JsonManagedReference
	@OneToMany(mappedBy="shift", cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	private Set<Task> tasks = new HashSet<>();
	
	public Shift(){}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Household getHousehold() {
		return household;
	}

	public void setHousehold(Household household) {
		this.household = household;
	}

	public String getNannyNotes() {
		return nannyNotes;
	}

	public void setNannyNotes(String nannyNotes) {
		this.nannyNotes = nannyNotes;
	}

	public String getParentNotes() {
		return parentNotes;
	}

	public void setParentNotes(String parentNotes) {
		this.parentNotes = parentNotes;
	}

	public Set<Task> getTasks() {
		return tasks;
	}

	public void setTasks(Set<Task> tasks) {
		this.tasks = tasks;
	}

	@Override
	public String toString() {
		return "Shift [id=" + id + ", user=" + user + ", household=" + household + ", nannyNotes=" + nannyNotes
				+ ", parentNotes=" + parentNotes + ", tasks=" + tasks + "]";
	}
}
