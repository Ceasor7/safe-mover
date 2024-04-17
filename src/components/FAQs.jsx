import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

function FAQs() {
    return (
        <div className="my-7">
            <h2 className="text-2xl font-bold">FAQs</h2>
            <div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Q: What safety measures are in place during vehicle transportation?
                        </AccordionTrigger>
                        <AccordionContent>
                            A: We employ secure handling techniques and utilize specialized equipment to ensure the safety of vehicles during transportation. Additionally, our team conducts thorough inspections before and after transit to mitigate any potential risks.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Q: How are pricing and delivery times determined?
                        </AccordionTrigger>
                        <AccordionContent>
                            A: Pricing depends on various factors, including distance, vehicle type, and specific client requirements. As for delivery times, we strive to meet agreed-upon schedules and communicate transparently with our clients throughout the process.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default FAQs;