'use client';
import { Button } from '@/components/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Textarea } from '@/components/textarea';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [msgSent, setMsgSent] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsError(false);
    if (!email || !name || !msg) return setIsError(true);

    emailjs
      .send(
        '',
        '',
        {
          from_name: name,
          from_email: email,
          message: msg,
        },
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          return setMsgSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const resetForm = () => {
    setOpen(false);
    setEmail('');
    setName('');
    setMsg('');
    setIsError(false);
    setMsgSent(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          className=" text-lg h-12 bg-primary hover:bg-transparent hover:text-primary hover:border-primary hover:border-2 text-white"
        >
          Contact us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Form</DialogTitle>
        </DialogHeader>
        {msgSent ? (
          <div className="text-center">
            <div className="color-primary text-left">
              Your message was sent succesfuly, we will contact you
              shortly!
            </div>
            <Button className="mt-4 w-28" onClick={resetForm}>
              Got it!
            </Button>
          </div>
        ) : (
          <>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="col-span-3"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="test@email.com"
                  className="col-span-3"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="message" className="text-right">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message goes here..."
                  className="col-span-3"
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              {isError && (
                <div className=" text-red-600 text-center">
                  Please complete all the fields
                </div>
              )}
            </div>
            <DialogFooter>
              <Button onClick={sendEmail}>Send Message</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
