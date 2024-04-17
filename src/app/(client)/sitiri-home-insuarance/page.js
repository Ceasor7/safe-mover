'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const SitiriInsurance = () => {
  return (
    <div className="my-5 flex flex-col">
      <div className="relative bg-fixed bg-parallax bg-cover py-36">
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col">
          <h1 className=" mx-auto max-w-5xl text-2xl sm:text-5xl font-bold">
            Buy Comprehensive Home Insurance in Kenya
          </h1>
          <p className=" mx-auto max-w-5xl my-7">
            Protect your family and possessions with the most comprehensive home
            insurance cover in Kenya.
          </p>
          <Link
            href="#"
            className="bg-[#00008B] text-white w-36 px-7 py-4  mx-auto max-w-5xl rounded-lg"
          >
            Get started
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row justify-between mx-auto max-w-5xl mb-10 mt-10">
          <h1 className="text-2xl font-bold">
            Secure your home with Sitiri Home Insurance
          </h1>
          <p className="sm:px-12">
            It takes years of hard work to acquire the possessions in your
            household and build a home. However, it only takes a single incident
            to wipe out everything in your possession.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between  mx-auto max-w-5xl gap-x-16 gap-y-8">
          <img src="/sitir-icon-2.webp" alt="Sitiri Home insurance" />
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-5">
              What is Sitiri Home Insurance?
            </h1>
            <p>
              This home insurance cover provides protection against losses or
              damage to property and liabilities accruing with ownership or
              occupation or a residence. It has benefits that suit homeowners,
              landlords, and occupiers of rented houses.
            </p>
          </div>
        </div>
      </div>
      <div className="flex my-8 flex-col sm:flex-row gap-x-28 gap-y-14 bg-gray-200 py-10">
        <div className="flex justify-center items-center  mx-auto max-w-5xl ">
          <img src="/video-holder-2.webp" alt="Sitiri Home Insurance" />
        </div>
        <div className="flex flex-col justify-center items-center text-center  mx-auto max-w-5xl ">
          <h1 className="font-bold text-2xl">
            Live worry-free when you are protected by the best home insurance
            cover in Kenya.
          </h1>
        </div>
      </div>
      <div className=" mx-auto max-w-5xl">
        <h1 className="text-center text-2xl font-bold my-6">
          How does Sitiri transcend other home insurance products?
        </h1>
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-12">
          <div className="flex flex-col border rounded-2xl border-[#00008B] p-2">
            <h1 className="text-center text-xl font-bold">Covered by Sitiri</h1>
            <ul className="list-disc ml-6">
              <li>
                Loss of Phones, laptops, tablets, jewellery, watches, or golf
                equipment when outside your house/using them during the course
                of work
              </li>
              <li>Loss of and damage to buildings</li>
              <li>All risk</li>
              <li>Earthquakes</li>
              <li>Flooding</li>
              <li>Fire</li>
              <li>Theft of household goods</li>
              <li>Work injury benefits</li>
              <li>Owners liability</li>
              <li>Occupiers and personal liability</li>
              <li>Political risks and terrorism</li>
              <li>Consequential loss</li>
            </ul>
          </div>
          <div className="flex flex-col border rounded-2xl border-[#00008B] p-2">
            <h1 className="text-center text-xl font-bold">Other Insurance</h1>
            <ul className="list-disc ml-6">
              <li>
                Loss of Phones, laptops, tablets, jewelry, watches, or golf
                equipment when outside your house/using them during the course
                of work
              </li>
              <li>Loss of and damage to buildings</li>
              <li>All risk</li>
              <li>Earthquakes</li>
              <li>Flooding</li>
              <li>Fire</li>
              <li>Theft of household goods</li>
              <li>Work injury benefits</li>
              <li>Owners liability</li>
              <li>Occupiers and personal liability</li>
              <li>Political risks and terrorism</li>
              <li>Consequential loss</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className=" mx-auto max-w-5xl text-2xl font-bold my-3">
          Exceptions of events that would be covered
        </h1>
        <p className=" mx-auto max-w-5xl mb-3">
          The insurers will not indemnify the insured in respect of loss, damage
          or liability directly or indirectly caused by or arising out of or
          aggravated by:
        </p>
        <div className="flex flex-col justify-center  mx-auto max-w-5xl sm:flex-row gap-x-10 gap-y-10">
          <div className="relative flex flex-col px-32 py-32 border rounded-2xl border-[#00008B] bg-[#00008B]">
            <p className="absolute top-0 left-0 ml-5 mt-5 text-xl font-bold text-white">
              War
            </p>
            <p className="absolute bottom-0 right-0 mr-5 mb-5 text-xl font-bold">
              1
            </p>
          </div>
          <div className="relative flex flex-col px-32 py-32 border rounded-2xl border-[#00008B]">
            <p className="absolute top-0 left-0 ml-5 mt-5 text-xl font-bold">
              Nuclear reaction, <br /> nuclear radiation or <br /> radioactive{' '}
              <br /> Contamination
            </p>
            <p className="absolute bottom-0 right-0 mr-5 mb-5 text-xl font-bold">
              2
            </p>
          </div>
          <div className="relative flex flex-col px-32 py-32 border rounded-2xl border-[#00008B]">
            <p className="absolute top-0 left-0 ml-5 mt-5 text-xl font-bold">
              Willful act or Willful <br /> negligence of <br /> Insured or of
              his <br />
              representatives
            </p>
            <p className="absolute bottom-0 right-0 mr-5 mb-5 text-xl font-bold">
              3
            </p>
          </div>
        </div>
      </div>
      <div className="flex my-8 flex-col  mx-auto max-w-5xl sm:flex-row gap-x-28 gap-y-14">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-2xl">
            How do I sign up for Sitiri Home Insurance?
          </h1>
          <p>
            The process of applying for Sitiri home insurance is quite
            straightforward.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src="/sitiri-imag2.webp" alt="Sitiri Home Insurance" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mt-5  mx-auto max-w-5xl items-center">
        <div className="flex flex-col sm:flex-row gap-x-10">
          <img
            src="fill-form.webp"
            alt="Fill form Sitiri insurance"
            className="bg-gray-100 rounded-2xl mb-3 px-7 py-7 w-40 h-40 shadow-2xl border border-gray-400"
          />
          <div className="flex flex-col">
            <p className="text-2xl sm:text-4xl mb-10 font-bold text-gray-600">
              01
            </p>
            <p className="font-bold text-lg">
              Fill out this form, and we’ll contact you
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-10">
          <img
            src="fill-form2.webp"
            alt="Fill form Sitiri insurance"
            className="bg-gray-100 rounded-2xl mb-3 px-7 py-7 w-40 h-40 shadow-2xl border border-gray-400"
          />
          <div className="flex flex-col">
            <p className="text-2xl sm:text-4xl mb-10 font-bold text-gray-600">
              02
            </p>
            <p className="font-bold text-lg">
              We conduct a valuation of your home and goods. If you’ve moved
              with SafeMovers in the past, you only need to tell us what’s new.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-10">
          <img
            src="fill-form3.webp"
            alt="Fill form Sitiri insurance"
            className="bg-gray-100 rounded-2xl mb-3 px-7 py-7 w-40 h-40 shadow-2xl border border-gray-400"
          />
          <div className="flex flex-col">
            <p className="text-2xl sm:text-4xl mb-10 font-bold text-gray-600">
              03
            </p>
            <p className="font-bold text-lg">
              Fill and sign the requirements and proposal forms provided and
              submit them to us.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-10">
          <img
            src="fill-form4.webp"
            alt="Fill form Sitiri insurance"
            className="bg-gray-100 rounded-2xl mb-3 px-7 py-7 w-40 h-40 shadow-2xl border border-gray-400"
          />
          <div className="flex flex-col">
            <p className="text-2xl sm:text-4xl mb-10 font-bold text-gray-600">
              04
            </p>
            <p className="font-bold text-lg">
              You are covered upon payment of the premiums.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-x-10 mt-5 py-10 items-center bg-gray-200">
        <div className="sm:w-1/3 mb-3  mx-auto max-w-5xl">
          <div>
            <img src="/sitiri-imag2.webp" alt="Sitiri Home Insurance" />
          </div>
        </div>
        <div className="sm:w-2/3 flex flex-col  mx-auto max-w-5xl">
          <h1 className="text-2xl font-bold">
            How do I get assistance on my home insurance claim?
          </h1>
          <div className="flex flex-col my-4 sm:flex-row gap-x-10">
            <Link
              href="/contact"
              className="bg-[#00008B] px-6 py-4 w-44 text-center text-white rounded-lg"
            >
              Write to us
            </Link>
            <p className="flex justify-center items-center sm:text-center">
              Or Call/WhatsApp +254 71-362-2228
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-x-16">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold mb-3">
                How do I lodge and insurance claim?
              </h1>
              <p>
                Upon occurrence of an insurance event, you should inform
                SafeMovers of the incident in writing as soon as possible –
                ideally within 24 hours. We will then provide you with a claim
                form for completion, upon which insurance due diligence will
                commence.
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold mb-3">
                How long does it take to process a home insurance claim?
              </h1>
              <p>
                SafeMovers and Lami will do their best to get your case settled
                in the shortest time possible. Your claim will be processed
                between 7- 21 working days upon providing all required claim
                documents
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5  mx-auto max-w-5xl items-center">
        <h1 className="text-2xl sm:text-5xl font-bold text-gray-700 ">
          Frequently Asked Questions
        </h1>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Valuation of property/contents. Is this shared at the beginning
                of the policy to generate the quote?
              </AccordionTrigger>
              <AccordionContent>
                Value of items to be provided in order to determine the premium.
                The estimates/market value (less depreciation) should apply for
                goods more than 3 years old.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Malicious damage by a household member
              </AccordionTrigger>
              <AccordionContent>
                It is not covered, it cannot be bought back at a premium.
                Members of your household are deemed to have authority to access
                your assets. What is the buy back ?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Unoccupied home, how long can my home be unoccupied{' '}
              </AccordionTrigger>
              <AccordionContent>
                – Under section A: A private dwelling that has been left
                uninhabited for more than 30 consecutive days.
                <br />– Under section B: A home that has been left uninhabited
                for more than 7 consecutive days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What happens with absence or valuation report/evidence of
                payment{' '}
              </AccordionTrigger>
              <AccordionContent>
                At the point of a claim, if evidence of ownership is required
                (total loss cases) then needs to be provided. For partial
                losses, one is expected to provide the Proforma invoice to
                replace the items at market value{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Which perils are excluded </AccordionTrigger>
              <AccordionContent>
                – Terrorism and political violence
                <br />– Consequential losses arising out of any damages{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Does the cover include antique items{' '}
              </AccordionTrigger>
              <AccordionContent>
                – They must be declared – VALUATION OF JEWELRY & RELATED
                VALUABLES
                <br />
                – The Company shall not be liable for loss or damage to Jewelry
                and related valuables whose individual value exceeds KES:
                50,000/= unless a valuation report from Professional Jeweler has
                been provided to the Company Definition of Valuables <br /> –
                Valuables Articles of value including but not limited to
                jewelry, metals, watches photographic equipment, binoculars,
                paintings and other works of art, radio televisions other audio
                or video and /or computer equipment, collections of stamps,
                coins and medals.){' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What circumstances can lead to insurer cancelling my home
                insurance
              </AccordionTrigger>
              <AccordionContent>
                – If the insured is discovered to be a moral hazard – wanting to
                benefit from insurance <br />
                <span className="font-bold">
                  {' '}
                  Cancellation clause in the policy:
                </span>
                <br />– This Policy may be cancelled at any time at the request
                of the Insured in which case the Company will retain a premium
                calculated on pro rata basis for the time this Policy has been
                in force and provided no claim has arisen during the current
                Period of Insurance. This Policy may also be cancelled at the
                option of the Company on fourteen (14) days notice being given
                in writing to the Insured, in which case the Company shall be
                liable to return a proportionate part of the premium for the
                unexpired term of the Policy from the date of such cancellation.{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Does the cover cater for spoilt electrical appliances as a
                result of electrical surge
              </AccordionTrigger>
              <AccordionContent>
                – Yes on condition that the items have a power surge protector.{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Do I need to inform the insurer is I make any structural changes{' '}
              </AccordionTrigger>
              <AccordionContent>
                – Yes you do since it increases the value of the house.{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Will insurance cover damage resulting from wear & tear{' '}
              </AccordionTrigger>
              <AccordionContent>No</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is money (hard cash) covered </AccordionTrigger>
              <AccordionContent>– Cash is not covered </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What if my belongings are lost, stolen or damaged while they are
                with me away from my home{' '}
              </AccordionTrigger>
              <AccordionContent>
                – If cover is taken under Section C – All Risks, they are
                covered{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Does the insurer reimburse with a cash settlement or
                replacement/repairing{' '}
              </AccordionTrigger>
              <AccordionContent>
                – The insurer chooses which mode to best Indemnify the insured{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is a police abstract required for stolen property? What else?{' '}
              </AccordionTrigger>
              <AccordionContent>
                – Yes, and a statement of what happened by Insured, and a
                witness, if any.{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is an excess </AccordionTrigger>
              <AccordionContent>
                – Excess is defined as the first amount that is payable by you
                in the event of an accident. It serves as the uninsurable
                portion of your accident or loss{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is the maximum value you can cover for a single item{' '}
              </AccordionTrigger>
              <AccordionContent>
                – There is no maximum as long as all values are declared{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How will my renewal policy change if I make a claim{' '}
              </AccordionTrigger>
              <AccordionContent>
                – By writing to us and asking us to renew the policy{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is there any implication on my policy if i have a mortgage{' '}
              </AccordionTrigger>
              <AccordionContent>
                – The policy will have a lien clause which means the policy is
                jointly owned with the financier{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Can I insure my home if its used for business{' '}
              </AccordionTrigger>
              <AccordionContent>
                – No, home insurance is for private dwelling only. <br />– We
                have a separate cover insuring Business premises{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What happens in the event that i down size, sell off some
                furniture or electronics and thus the value of the goods
                originally insured goes down?{' '}
              </AccordionTrigger>
              <AccordionContent>
                – Where the assets have been disposed, it means that the sum
                insured reduces. We should be advised of the changes and a
                refund premium processed.{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How will my claim be filled if the product lost/damaged no
                longer exists in the market ? At what value will the claim be
                filled?{' '}
              </AccordionTrigger>
              <AccordionContent>
                – You will be required to provide a replacement proforma invoice
                of a near similar item{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Can i exclude my home house staff to lower my quote?{' '}
              </AccordionTrigger>
              <AccordionContent>
                – Cover for workers is minimal and will not make a difference{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What does the policy cover with regards to home servants?{' '}
              </AccordionTrigger>
              <AccordionContent>
                In the event of death of or bodily injury or disease to any
                domestic employee occurring during the currency of the Policy
                and arising out of and in the course of employment, the Company
                will compensate for claims including costs and expenses which
                the Insured will become liable to pay at law including payment
                under the Work Injury Benefits Act 2007 as set out here below:{' '}
                <br />
                <span className="font-bold"> Act Limits</span> <br />
                – Death: 96 months earnings subject to the set limits <br />
                – Permanent Total Disablement: As per WIBA but subject to the
                limits of liability <br />
                – Temporary Total Disablement: As per WIBA Act 2007 subject to
                twelve months earnings <br />
                – Medical Expenses: KES 100,000/= per employee per claim Subject
                to an excess of KES. 5,000/= <br />– Funeral Expenses: KES
                30,000/ = per deceased employee{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SitiriInsurance;
