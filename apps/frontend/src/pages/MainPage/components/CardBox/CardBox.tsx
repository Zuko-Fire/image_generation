import { Box, Chip } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const CardBox = ({ children }: Props) => {
  const filters = ["Свежее", "Лучшее", "Комментируемое", "Выбор редакции"];

  return (
    <Box
      sx={{
        backgroundColor: "#121212", // Dark background color
        color: "white", // Text color for visibility
      }}
    >
      {/* Filter Chips Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {filters.map((filter, index) => (
          <Chip
            key={index}
            label={filter}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Light background for chips
              color: "white",
              fontSize: "1.2rem", // Increase font size
              padding: "10px 20px", // Increase padding for larger chips
              cursor: "pointer",
              '&:hover': {
                backgroundColor: "rgba(255, 255, 255, 0.2)", // Change background on hover
              },
            }}
          />
        ))}
      </Box>

      {/* Cards Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start", // Align items to the top
          gap: "20px",
          width: "99%",
          padding: "20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};