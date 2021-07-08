import React from "react";

export default function Container() {
  React.useEffect(() => {
    const draggables = document.querySelectorAll(".draggable");

    const empties = document.querySelectorAll(".empty");

    var id = "";
    for (const empty of empties) {
      empty.addEventListener("dragover", dragOver);
      empty.addEventListener("dragenter", dragEnter);
      empty.addEventListener("dragleave", dragLeave);
      empty.addEventListener("drop", dragDrop);
    }

    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", dragStart);
      draggable.addEventListener("dragend", dragEnd);
    });

    //  start the drag event
    function dragStart() {
      console.log("start");
      this.className += " hold";
      id = this.id;
      setTimeout(() => {
        this.className = "invisible";
      }, 0);
    }

    //  end the drag event
    function dragEnd() {
      console.log("end");
      this.className = "draggable";
    }

    // drag over deals with hovering into empty boxes
    function dragOver(e) {
      e.preventDefault();
      console.log("over");
    }

    // entering into empty
    function dragEnter() {
      console.log("enter");
      this.className += " hovered";
    }

    // leaving from empty
    function dragLeave() {
      console.log("leave");
      this.className = "empty";
    }

    //  dropping the draggable
    function dragDrop() {
      console.log("drop");
      this.className = "empty";
      console.log(document.getElementById(id));
      this.append(document.getElementById(id));
    }
  }, []);

  return (
    <>
    
    <div className="main">
        <div>Backlog</div>
        <div>TO DO</div>
        <div>Ongoing</div>
        <div>Done</div>

     

    </div>
      <div className="header">
        <div className="empty"></div>
        <div className="empty"></div>
        <div className="empty"></div>
        <div className="empty"></div>
      </div>

      <div className="container">
        <p className="draggable" id="1" draggable>
          A
        </p>
        <p className="draggable" id="2" draggable>
          B
        </p>
        <p className="draggable" id="3" draggable>
          C
        </p>
        <p className="draggable" id="4" draggable>
          D
        </p>
        <p className="draggable" id="5" draggable>
          E
        </p>
        <p className="draggable" id="6" draggable>
          F
        </p>

      </div>
    </>
  );
}
