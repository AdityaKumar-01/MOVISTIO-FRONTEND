import React,{useState} from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./ReviewCard.style.css"
const ReviewCard = ({str, status}) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return (
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="accordion-review"
          >
            <Typography
              sx={{
                width: "10%",
                flexShrink: 0,
                paddingLeft: "3%",
                color: status == "Positive" ? "#39A388" : "#FF2442",
              }}
            >
              {status}
            </Typography>
            <Typography>{str.split(" ").splice(0, 20).join(" ")}...</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{str}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
}

export default ReviewCard
