package entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Household {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	@Column(name="parent_notes")
	private int parentNotes;
	@Column(name="nanny_notes")
	private int nannyNotes;
	
	@ManyToMany(mappedBy="households", fetch=FetchType.EAGER)
	@JsonManagedReference
	private Set<User> users = new HashSet<>();

	public Household() {
	}

	public Household(int id, String name, int parentNotes, int nannyNotes) {
		this.id = id;
		this.name = name;
		this.parentNotes = parentNotes;
		this.nannyNotes = nannyNotes;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getParentNotes() {
		return parentNotes;
	}

	public void setParentNotes(int parentNotes) {
		this.parentNotes = parentNotes;
	}

	public int getNannyNotes() {
		return nannyNotes;
	}

	public void setNannyNotes(int nannyNotes) {
		this.nannyNotes = nannyNotes;
	}

	public int getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Household [id=" + id + ", name=" + name + ", parentNotes=" + parentNotes + ", nannyNotes=" + nannyNotes
				+ "]";
	}
}
