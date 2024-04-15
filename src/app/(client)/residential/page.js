'use client';
import OtherServices from '@/components/Services/OtherServices';
import YoutubeVideo from '@/components/Youtube/YoutubeVideo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const ResidentialMovers = () => {
  return (
    <div className="my-5  mx-auto max-w-6xl items-center">
      <h1 className="text-4xl text-gray-400 font-bold mb-3">
        Corporate and Office Moving Services in Kenya
      </h1>
      <div className="flex flex-col sm:flex-row sm:gap-x-10">
        <div className="sm:w-2/3 flex flex-col">
          <div className="my-7">
            <img
              src="/residential-movers-banner.jpg"
              alt=" residential-movers-banner"
            />
            <p>
              At Safe Movers, we understand that moving to a new residence can
              be a complex and daunting task. Our mission is to alleviate the
              stress and hassle of relocating by providing comprehensive and
              reliable residential house moving services across Kenya. With
              years of experience and a dedicated team, we ensure a seamless
              transition to your new home.
            </p>
          </div>
          <div className="my-7">
            <h1 className="text-2xl font-bold">
              Services Offered for Residential House Moving
            </h1>
            <YoutubeVideo />
          </div>
          <div className="my-7">
            <h1 className="text-2xl text-gray-700 font-semibold my-6">
              Packing Services
            </h1>
            <p>
              Our packing services include the provision of high-quality packing
              materials suitable for various items. Fragile or valuable
              possessions receive specialized packing to ensure their safe
              transport.
            </p>
            <h1 className="text-2xl text-gray-700 font-semibold my-6">
              Loading and Unloading
            </h1>
            <p>
              Trained professionals handle the loading and unloading of your
              belongings. We utilize appropriate equipment and tools to ensure
              careful handling and prevent any damage.
            </p>
            <h1 className="text-2xl text-gray-700 font-semibold my-6">
              Transportation
            </h1>
            <p>
              Safe Movers boasts a well-maintained fleet suitable for
              residential moves. Our drivers are experienced in navigating
              different terrains, guaranteeing the safe transport of your
              possessions.
            </p>
            <h1 className="text-2xl text-gray-700 font-semibold my-6">
              Unpacking Services
            </h1>
            <p>
              Upon reaching your new residence, our team assists in unpacking
              and arranging your belongings according to your specifications. We
              also take care of the disposal of packing materials, ensuring a
              clutter-free space.
            </p>
            <h1 className="text-2xl text-gray-700 font-semibold my-6">
              Dismantling and Assembling of Furniture
            </h1>
            <p>
              {' '}
              We understand the complexities of furniture. Our team proficiently
              dismantles and assembles furniture pieces, ensuring they are
              transported and reassembled without any damage.
            </p>
          </div>
          <div className="my-7">
            <h1 className="text-4xl font-bold text-[#00008B]">
              Process of Residential House Moving with Safe Movers
            </h1>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Initial Consultation and Assessment
                  </AccordionTrigger>
                  <AccordionContent>
                    We begin with a detailed consultation to understand your
                    moving needs. Our experts assess the volume of items and
                    discuss specific requirements to create a tailored moving
                    plan.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Customized Moving Plan</AccordionTrigger>
                  <AccordionContent>
                    Based on the assessment, we create a customized moving plan
                    that outlines the entire process, including timelines,
                    packing strategies, and transportation details.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Scheduling and Coordination
                  </AccordionTrigger>
                  <AccordionContent>
                    Our team coordinates the moving schedule to align with your
                    convenience. We keep you informed at every step, ensuring
                    transparency and effective communication throughout the
                    process.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Execution of the Move</AccordionTrigger>
                  <AccordionContent>
                    On the scheduled day, our professionals execute the move as
                    per the devised plan. We meticulously pack, load, transport,
                    unload, and unpack your belongings, adhering to the highest
                    standards of quality.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Post-Move Follow-up and Support
                  </AccordionTrigger>
                  <AccordionContent>
                    After the move, we follow up to ensure your satisfaction.
                    Any additional support or assistance required post-move is
                    promptly addressed by our team.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="my-7">
            <h1 className="text-4xl font-bold text-[#00008B]">
              Why Choose SafeMovers™ for Residential House Moving?
            </h1>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Professionalism and Experience
                  </AccordionTrigger>
                  <AccordionContent>
                    Our team comprises skilled professionals with extensive
                    experience in the moving industry. From planning to
                    execution, we handle every aspect of your move with utmost
                    professionalism and care.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Expertise in Local Relocations in Kenya
                  </AccordionTrigger>
                  <AccordionContent>
                    Operating across Kenya, we have an in-depth understanding of
                    local nuances, traffic patterns, and logistical challenges.
                    This expertise enables us to execute moves efficiently,
                    ensuring timely and secure deliveries.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Customer-Centric Approach</AccordionTrigger>
                  <AccordionContent>
                    At Safe Movers, our focus remains on our customers. We
                    prioritize your needs and preferences, tailoring our
                    services to meet your specific requirements. Your
                    satisfaction is our top priority.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Safety Measures and Insurance
                  </AccordionTrigger>
                  <AccordionContent>
                    We value the safety of your belongings. Our team employs
                    industry-standard safety protocols and uses quality packing
                    materials to safeguard your items during transit.
                    Additionally, we offer insurance coverage for added peace of
                    mind.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="my-7">
            <h1 className="text-4xl font-bold text-[#00008B]">
              Additional Features and Services
            </h1>
            <ul className="list-disc">
              <li className="ml-10">
                <span className="font-bold">Wall Mounting Services.</span> Safe
                Movers goes beyond just relocation; we also offer wall mounting
                services for TVs, paintings, pictures, and other decor items.
                Our experts ensure secure and aesthetically pleasing
                installations.
              </li>
              <li className="ml-10">
                <span className="font-bold">DSTV Installation Services.</span>{' '}
                We have an in-house team of trained professionals capable of
                handling DSTV installations. Whether it’s setting up satellite
                dishes or configuring channels, we ensure a seamless
                installation process.
              </li>
              <li className="ml-10">
                <span className="font-bold">
                  Chandelier Installation Services.
                </span>{' '}
                For those exquisite lighting fixtures, Safe Movers provides
                specialized chandelier installation services. Our team handles
                the delicate process of installing and securing these fixtures
                in your new home.
              </li>
              <li className="ml-10">
                <span className="font-bold">Storage Solutions.</span>Storage
                Solutions. If needed, Safe Movers offers secure storage
                facilities for short or long-term storage of your belongings.
                Specialized Services for Valuables and Antiques We understand
                the importance of special items. Our team provides extra care
                and attention when handling valuables and antiques during the
                move.
              </li>
              <li className="ml-10">
                <span className="font-bold">
                  Pet and Vehicle Moving Services.
                </span>{' '}
                Safe Movers extends its services beyond household items. We also
                offer transportation solutions for pets and vehicles, ensuring a
                hassle-free relocation for your entire household.
              </li>
            </ul>
          </div>
          <div className="my-7">
            <h1 className="text-4xl font-bold text-[#00008B]">
              Frequently Asked Questions (FAQs)
            </h1>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Q: How far in advance should I contact Safe Movers to book
                    my move?
                  </AccordionTrigger>
                  <AccordionContent>
                    A: It’s advisable to contact us at least a few weeks before
                    your desired moving date to ensure availability and proper
                    planning.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Q: Are my belongings insured during the move?
                  </AccordionTrigger>
                  <AccordionContent>
                    A: Yes, we offer insurance coverage for your items in
                    transit for added protection.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <p>
              Talk to your move consultant about properly securing the
              investment of your home through our customized{' '}
              <Link href="/sitiri-home-insuarance" className="text-[#00008B]">
                {' '}
                home insurance policy.{' '}
              </Link>
            </p>
          </div>
        </div>
        <div className="sm:w-1/3 ">
          <OtherServices />
        </div>
      </div>
    </div>
  );
};

export default ResidentialMovers;
