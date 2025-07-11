"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Users } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    })
    alert("Thank you for your message! We will get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-primary via-secondary to-primary/90 text-white py-20 lg:py-32 flex items-center justify-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[40vh]">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Contact Wetoo Technical Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Let's lift your business to new heights. Reach out for a quote, support, or expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                <Link href="#contact-form">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                <Link href="#contact-form">Send a Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Summary */}
      <section className="relative py-20 bg-gradient-to-br from-white to-blue-100 text-primary overflow-hidden">
        <span className="absolute -top-16 -left-16 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl opacity-40 z-0"></span>
        <span className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl opacity-20 z-0"></span>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 font-poppins drop-shadow-lg text-primary">
              We're Here to Help
            </h2>
            <p className="text-lg md:text-xl text-blue-900 mb-6 font-poppins">
              Whether you need a custom crane solution, urgent repairs, or expert advice, our team is ready to help you move forward. Reach out for a free consultation or to discuss your project needs.
            </p>
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center mb-6">
              <div className="flex-1 bg-primary/10 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:bg-primary/20 transition">
                <Phone className="h-8 w-8 mb-2 text-primary" />
                <span className="text-lg font-semibold">Call Us</span>
                <a href="tel:+971567585319" className="text-xl font-bold text-blue-900 hover:underline mt-1">
                  +971 567585319
                </a>
                <span className="text-xs text-blue-900 mt-2">24/7 Emergency Support</span>
              </div>
              <div className="flex-1 bg-primary/10 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:bg-primary/20 transition">
                <Mail className="h-8 w-8 mb-2 text-primary" />
                <span className="text-lg font-semibold">Email</span>
                <a href="mailto:info@wetootech.com" className="text-xl font-bold text-blue-900 hover:underline mt-1">
                  info@wetootech.com
                </a>
                <span className="text-xs text-blue-900 mt-2">Response within 1 business day</span>
              </div>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-blue-900 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-colors duration-200">
              <Link href="#contact-form">
                Request a Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6 font-poppins">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary">Phone</h3>
                      <a href="tel:+971567585319" className="text-slate-700 hover:underline block">+971 567585319</a>
                      <a href="tel:+97142977076" className="text-slate-700 hover:underline block">+971 42977076 (Landline)</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary">Email</h3>
                      <a href="mailto:info@wetootech.com" className="text-slate-700 hover:underline block">info@wetootech.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary">Office Address</h3>
                      <p className="text-slate-700">
                        Belrasheed Building, AL Baraha
                        <br />
                        Deira, Dubai - U.A.E
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary">Business Hours</h3>
                      <p className="text-slate-700">
                        Monday - Saturday: 8:00 AM - 6:00 PM
                        <br />
                        Sunday: Holiday
                        <br />
                        Emergency Support: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quick Actions */}
              <div className="flex flex-col gap-4 mt-8">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                  <Link href="#contact-form">Request a Quote</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  asChild
                >
                  <Link href="mailto:info@wetootech.com">Email Us Directly</Link>
                </Button>
              </div>
            </div>
            {/* Contact Form */}
            <Card className="shadow-xl border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-primary">Send Us a Message</CardTitle>
                <CardDescription className="font-poppins">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        autoComplete="given-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        autoComplete="family-name"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Please describe your requirements or inquiry..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-100">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto text-center shadow-lg border-primary/10">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl font-poppins text-primary">Join Our Team</CardTitle>
              <CardDescription className="text-lg font-poppins">
                We're always looking for talented professionals to join our team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 mb-6">
                If you're passionate about engineering excellence and want to be part of a dynamic team that's shaping
                the future of industrial lifting solutions, we'd love to hear from you.
              </p>
              <div className="flex items-center justify-center gap-2 text-slate-800">
                <Mail className="h-5 w-5" />
                <span>
                  Email your resume to: <strong>sivadas@wetootech.com</strong>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-8 font-poppins">Find Us</h2>
            <div className="bg-primary/5 h-64 rounded-lg flex items-center justify-center shadow-inner">
              <div className="text-center text-primary">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-semibold">Belrasheed Building, AL Baraha, Deira, Dubai - U.A.E</p>
                <p className="text-base text-primary/80">Visit us for a consultation or site assessment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
