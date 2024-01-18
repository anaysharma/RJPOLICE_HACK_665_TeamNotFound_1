import Header from "../components/Header";

function AccessDenied() {
  return (
    <>
      <Header />
      <div className="mx-auto grid h-svh max-w-5xl place-items-center p-4">
        <ul className="grid gap-4 py-3">
          <li className="rounded-lg bg-white p-4 leading-6">
            <strong className="mr-2">1. Right to Dignity and Respect:</strong>
            Every individual has the right to be treated with dignity and
            respect by law enforcement officers, irrespective of their
            background or circumstances.
          </li>

          <li className="rounded-lg bg-white p-4 leading-6">
            <strong className="mr-2">
              2. Protection from Arbitrary Arrest or Detention (Article 22):
            </strong>
            Individuals have the right to know the reasons for their arrest and
            to be informed of any charges against them promptly. Unlawful or
            arbitrary arrests are prohibited.
          </li>

          <li className="rounded-lg bg-white p-4 leading-6">
            <strong className="mr-2">
              3. Right to Legal Representation (Article 22):
            </strong>
            Anyone arrested has the right to be defended by a legal practitioner
            of their choice. They should be informed of this right without
            delay.
          </li>

          <li className="rounded-lg bg-white p-4 leading-6">
            <strong className="mr-2">
              4. Protection against Torture or Inhuman Treatment (Article 21):
            </strong>
            No person shall be subjected to torture or cruel, inhuman, or
            degrading treatment or punishment. This includes protection during
            police custody.
          </li>

          <li className="rounded-lg bg-white p-4 leading-6">
            <strong className="mr-2">
              5. Right to Fair Trial (Article 21):
            </strong>
            Every person has the right to a fair and public trial, and the right
            to be presumed innocent until proven guilty.
          </li>

          <li className="rounded-lg bg-white p-4 leading-6">
            <strong className="mr-2">
              6. Right to Information about Arrest (Article 22):
            </strong>
            The arrested person has the right to be informed of the grounds of
            arrest and to have access to legal counsel during interrogation.
          </li>

          <li className="rounded-lg bg-white p-4 leading-6">
            <strong className="mr-2">
              7. Right to Complain (NHRC Act, 1993):
            </strong>
            Individuals have the right to file complaints against police
            misconduct with the National Human Rights Commission (NHRC) or the
            State Human Rights Commissions (SHRCs).
          </li>

          <li className="rounded-lg bg-white p-4 leading-6">
            <strong className="mr-2">
              8. Right to Non-Discrimination (Article 14-15):
            </strong>
            All individuals are entitled to equal protection under the law, and
            discrimination based on caste, religion, gender, or any other ground
            is prohibited.
          </li>

          <li className="rounded-lg bg-white p-4 leading-6">
            <strong className="mr-2">9. Right to Privacy (Article 21):</strong>
            The right to privacy includes protection from unwarranted
            intrusions, searches, or seizures by law enforcement authorities.
          </li>

          <li className="rounded-lg bg-white p-4 leading-6">
            <strong className="mr-2">
              10. Right to Compensation (NHRC Act, 1993):
            </strong>
            Victims of police misconduct have the right to seek compensation for
            violations of their rights through legal means and complaint
            mechanisms.
          </li>
        </ul>
        It's essential to note that while the police play a crucial role in
        maintaining law and order, respecting and protecting the rights of
        individuals is equally important. In cases of misconduct, individuals
        have avenues to seek justice and accountability.
      </div>
    </>
  );
}
export default AccessDenied;
