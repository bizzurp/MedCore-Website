import { useState } from 'react'
import { Icon } from './Icon'

const emptyForm = { name: '', email: '', hospital: '', beds: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your work email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!form.hospital.trim()) errors.hospital = 'Please enter your hospital or organization.'
  return errors
}

export function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(form)
    if (Object.keys(found).length > 0) {
      setErrors(found)
      return
    }
    // No backend on the marketing site — acknowledge locally.
    setSubmitted(true)
  }

  const fieldClass = (field) =>
    `w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:ring-2 focus:ring-brand/25 ${
      errors[field] ? 'border-rose-400' : 'border-slate-300 focus:border-brand'
    }`

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid lg:grid-cols-2">
          <div className="bg-navy p-10 text-white lg:p-12">
            <h2 className="text-3xl font-bold tracking-tight">See MedCore on your ward</h2>
            <p className="mt-4 text-slate-300">
              Book a walkthrough and we'll model the reclaimed bed-hours and recovered receivables
              for your facility.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Live discharge Mission Control demo',
                'Statutory waterfall on your chargemaster',
                'ROI model for your bed count',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-200">
                  <Icon name="check" className="h-5 w-5 text-brand-light" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-bold tabular-nums text-white">Under 45 minutes</p>
              <p className="text-sm text-slate-400">from May-Go-Home order to digital gate pass</p>
            </div>
          </div>

          <div className="p-10 lg:p-12">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-accent-green">
                  <Icon name="check" className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-navy">Thanks, {form.name.split(' ')[0]}!</h3>
                <p className="mt-2 max-w-sm text-sm text-slate-600">
                  Your demo request has been captured. A MedCore specialist will reach out to{' '}
                  <span className="font-medium text-slate-800">{form.email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(emptyForm)
                    setSubmitted(false)
                  }}
                  className="mt-6 text-sm font-medium text-brand hover:text-brand-dark"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Full name
                  </label>
                  <input id="name" type="text" value={form.name} onChange={update('name')} className={fieldClass('name')} placeholder="Dr. Maria Santos" />
                  {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Work email
                  </label>
                  <input id="email" type="email" value={form.email} onChange={update('email')} className={fieldClass('email')} placeholder="you@hospital.ph" />
                  {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="hospital" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Hospital / organization
                    </label>
                    <input id="hospital" type="text" value={form.hospital} onChange={update('hospital')} className={fieldClass('hospital')} placeholder="St. Jude Medical" />
                    {errors.hospital && <p className="mt-1 text-xs text-rose-600">{errors.hospital}</p>}
                  </div>
                  <div>
                    <label htmlFor="beds" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Licensed beds
                    </label>
                    <select id="beds" value={form.beds} onChange={update('beds')} className={fieldClass('beds')}>
                      <option value="">Select</option>
                      <option value="100-199">100–199</option>
                      <option value="200-499">200–499</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Anything we should know? <span className="text-slate-400">(optional)</span>
                  </label>
                  <textarea id="message" rows={3} value={form.message} onChange={update('message')} className={fieldClass('message')} placeholder="Current discharge time, HIS in use, biggest pain point…" />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-dark hover:-translate-y-0.5"
                >
                  Request a demo
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-slate-400">
                  We respect your data under RA 10173. No spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
