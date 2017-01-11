package entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Child {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private int age;

	@ManyToOne(cascade=CascadeType.ALL)
	@JsonBackReference
	@JoinColumn(name = "household_id")
	private Household household;
	@Column(name="parent_notes")
	private int parentNotes;
	@Column(name="nanny_notes")
	private int nannyNotes;

	public Child() {
	}
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Household getHousehold() {
		return household;
	}

	public void setHousehold(Household household) {
		this.household = household;
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

	@Override
	public String toString() {
		return "Child [id=" + id + ", name=" + name + ", age=" + age + ", household=" + household + ", parentNotes="
				+ parentNotes + ", nannyNotes=" + nannyNotes + "]";
	}

}
