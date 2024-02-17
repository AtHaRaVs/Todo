import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import colors from "../colours/colors";

export default function QuoteCard() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();

        // Set a random quote from the response to the state
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    // Call the asynchronous function
    fetchQuote();
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <Card sx={{ maxWidth: "100%", backgroundColor: colors.primary_black }}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color={colors.primary_gold}
          >
            {quote ? quote.text : "Loading..."}
          </Typography>
          {quote && (
            <Typography variant="body2" color={colors.primary_white}>
              - {quote.author || "Unknown"}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
