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
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

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
	
	@ManyToMany(mappedBy="households", cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JsonManagedReference
	private Set<User> users = new HashSet<>();
	@OneToMany(mappedBy="household", cascade=CascadeType.ALL)
	@JsonManagedReference
	private Set<Child> children = new HashSet<>();
	
	@OneToMany(mappedBy="household", cascade=CascadeType.ALL)
	@JsonManagedReference
	private Set<Shift> shifts = new HashSet<>();

	public Household() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
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
	public Set<Child> getChildren() {
		return children;
	}
	public void setChildren(Set<Child> children) {
		this.children = children;
	}
	public Set<Shift> getShifts() {
		return shifts;
	}
	public void setShifts(Set<Shift> shifts) {
		this.shifts = shifts;
	}

	@Override
	public String toString() {
		return "Household [id=" + id + ", name=" + name + ", parentNotes=" + parentNotes + ", nannyNotes=" + nannyNotes
				+ ", users=" + users + ", children=" + children + ", shifts=" + shifts + "]";
	}
}
