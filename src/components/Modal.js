import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{ color: "white" }}>
        View Card
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Strength 100
          </Typography>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Special Attack 222
          </Typography>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Defense 444
          </Typography>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Attack 412
          </Typography>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Hp 666
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
