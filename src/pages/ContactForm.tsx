/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Stack } from "@mui/material"
import { FieldInput } from "../components/FieldInput"
import React, { useState } from "react"
import emailjs from '@emailjs/browser';
import { Loading } from '../components/Loading';
import Typography from '@mui/material/Typography';
import { GoBackButton } from "../components/GoBackButton";
import { AlertComponent } from "../components/Alert";
import { TEXT } from "../utils/contans";

interface Props {
  lastname: string
  name: string
  email: string
  phone: string
  observation: string
}

const fields = [
  {
    label: 'Nombre',
    name: 'name',
    width: 250
  },
  {
    label: 'Apellido',
    name: 'lastname',
    width: 250
  },
  {
    label: 'Email',
    name: 'email',
    width: 250
  },
  {
    label: 'Telefono',
    name: 'phone',
    width: 250
  },
  {
    label: 'Comentarios',
    name: 'observation',
    width: 545
  },

]

export const ContactForm = () => {
  const [form, setForm] = useState<Props>({
    name: '',
    email: '',
    lastname: '',
    phone: '',
    observation: ''
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const sendEmail = async (e: React.ChangeEvent<HTMLInputElement>, form: any) => {
    e.preventDefault();
    try {
      setLoading(true)
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form,
        {publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_ID}
      )
      setOpen(true)
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <React.Fragment>
      { 
        <AlertComponent
          title={TEXT.alertTitle}
          dialog={TEXT.alertDialog}
          open={open}
          setOpen={setOpen}
          closeButton={TEXT.closeButtonText}
        />
      }
      <Stack>
        <Typography variant="h3" fontWeight='500' >
          {TEXT.contactTitle}
        </Typography>
        <Typography variant="caption" fontWeight='300' >
          {TEXT.contactSubtitle}
        </Typography>
      </Stack>
      <Stack 
        sx={{backgroundColor: 'white'}}
        width={600}
        height={500}
        direction={'row'}
        flexWrap="wrap"
        useFlexGap
        mt={5}
        mb={10} 
        justifyContent={'center'}
        alignContent={'center'}
        gap={2}
      >
        <Loading
          loading={loading}
        />
        {
          fields.map((field: {label: string, name: string, width: number}, index: number) => (
            <FieldInput
              key={index}
              label={field.label}
              name={field.name}
              value={form[field.name as never]}
              onChangeInput={(e)=> handleChange(e)}
              width={field.width}
            />
          ))
        }
        <Stack mt={5} gap={5} direction={'row'} width={'40%'}>
          <GoBackButton
            buttonText={TEXT.backButtonText}
            to='/home'
          />
          <Button variant="contained" onClick={(e:any )=>sendEmail(e, form)}>
            {TEXT.sendButton}
          </Button>
        </Stack>
      </Stack>
    </React.Fragment>
  )
}