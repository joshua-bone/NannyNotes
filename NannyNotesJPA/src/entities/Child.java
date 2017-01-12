package entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Child {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private int age;
	@ManyToOne(cascade=CascadeType.MERGE)
	@JsonManagedReference(value="household-child")
	@JoinColumn(name = "household_id")
	private Household household;
	@Column(name="parent_notes")
	private String parentNotes;
	@Column(name="nanny_notes")
	private String nannyNotes;

	public Child() {
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

	@Override
	public String toString() {
		return "Child [id=" + id + ", name=" + name + ", age=" + age + ", household=" + household + ", parentNotes="
				+ parentNotes + ", nannyNotes=" + nannyNotes + "]";
	}

}
