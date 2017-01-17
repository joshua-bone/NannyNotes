package entities;

import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Event {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String title;
	@JsonBackReference(value="household-event")
	@OneToOne(mappedBy="event", cascade=CascadeType.ALL)
	private Household household;
	@Column(name="nanny_notes")
	private String nannyNotes;
	@Column(name="parents_notes")
	private String parentNotes;
//	@Column(name="starts_at")
	private Date startsAt;
//	@Column(name="ends_at")
	private Date endsAt;
	@Column(name="primary_color")
	private String primaryColor;
	@Column(name="secondary_color")
	private String secondaryColor;
	private boolean draggable;
	private boolean resizable;
//	@Column(name="all_day")
	private boolean allDay;
	
	public Event() {
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
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


	public Date getStartsAt() {
		return startsAt;
	}


	public void setStartsAt(Date startsAt) {
		this.startsAt = startsAt;
	}


	public Date getEndsAt() {
		return endsAt;
	}


	public void setEndsAt(Date endsAt) {
		this.endsAt = endsAt;
	}


	public String getPrimaryColor() {
		return primaryColor;
	}

	public void setPrimaryColor(String primaryColor) {
		this.primaryColor = primaryColor;
	}

	public String getSeondaryColor() {
		return secondaryColor;
	}

	public void setSeondaryColor(String seondaryColor) {
		this.secondaryColor = seondaryColor;
	}

	public boolean isDraggable() {
		return draggable;
	}

	public void setDraggable(boolean draggable) {
		this.draggable = draggable;
	}

	public boolean isResizable() {
		return resizable;
	}

	public void setResizable(boolean resizable) {
		this.resizable = resizable;
	}

	public boolean isAllDay() {
		return allDay;
	}

	public void setAllDay(boolean allDay) {
		this.allDay = allDay;
	}

	@Override
	public String toString() {
		return "Event [id=" + id + ", title=" + title + ", household=" + household + ", nannyNotes=" + nannyNotes
				+ ", parentNotes=" + parentNotes + ", startsAt=" + startsAt + ", endsAt=" + endsAt + ", primaryColor="
				+ primaryColor + ", secondaryColor=" + secondaryColor + ", draggable=" + draggable + ", resizable="
				+ resizable + ", allDay=" + allDay + "]";
	}
	
}
