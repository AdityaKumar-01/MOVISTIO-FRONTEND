import React,{useState} from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const ReviewCard = ({str, status}) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return (
      <div>
        {/* {str.split(" ").splice(0,10).join(" ")}...
            {status} */}
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {status}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {str.split(" ").splice(0,10).join(" ")}...
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {str}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
}

export default ReviewCard
