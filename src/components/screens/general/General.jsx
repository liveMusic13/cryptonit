import { useCheckWidth } from '../../../hooks/useCheckWidth';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import styles from './General.module.css';

const General = () => {
	const { windowWidth } = useCheckWidth();

	return (
		<Layout>
			<Header />
			<div className={styles.block__content}>
				<h1 className={styles.title}>
					GENERAL TERMS AND
					{windowWidth > 375 && (
						<>
							<br />
						</>
					)}{' '}
					CONDITIONS OF USE
					{windowWidth > 375 && (
						<>
							<br />
						</>
					)}{' '}
					OF THE WEBSITE
				</h1>
				<div className={styles.block__description}>
					<div className={styles.description}>
						<h2>Acceptance of terms and conditions of use</h2>
						<p>
							Any person accessing this website and make use of it declares to
							know and also accepts these “General Conditions”, fully accessible
							to any user through its “Legal Notice”. Knowledge and acceptance
							of these “General Conditions” constitute a necessary prerequisite
							for accessing the information society services offered by SIA
							GUDVA and benefiting from their provision. Therefore, any person
							who does not agree with what is stipulated therein shall not have
							the right to make use of this Website
						</p>
					</div>
					<div className={styles.description}>
						<h2>Web Site Ownership</h2>
						<p>
							This Web Page (www.cryptonit.app) is the property of SIA GUDVA.
							The intellectual property rights and rights of exploitation and
							reproduction of said Web Site, as well as its content, appearance
							and design, are the exclusive property of this Company, unless
							expressly specified otherwise. Any improper use of this Web site
							or its contents may be prosecuted in accordance with applicable
							law.
						</p>
						<p>
							SIA GUDVA reserves the right to modify, update, expand and delete
							at any time, without prior notice, the content of this Website,
							including its own conditions of use. Likewise, it may restrict or
							remove access to this Website, for the reasons it deems
							appropriate and at its sole discretion.
						</p>
					</div>
					<div className={styles.description}>
						<h2>Scope of the Websit</h2>
						<p>
							All information made available to the user through this website
							constitutes its “Content” and shall be for information purposes
							only.
						</p>
						<p>
							It is not the intention of the Company to use this Web Site as a
							means or instrument, directly or indirectly, of conducting
							business or contracting for services. Under no circumstances
							should this Web Site be used or considered as an offer to enter
							into a contract, a solicitation of an offer to enter into a
							contract, or as an offer to enter into any other type of
							transaction, unless expressly stated otherwise.
						</p>
						<p>
							The content of this Website does not entail any kind of legal,
							financial or any other kind of advice by the Company in relation
							to the performance in the cryptocurrency market, being its purpose
							exclusively informative. Consequently, the information contained
							therein should not be taken as a basis or recommendation to make
							investments or investment decisions, being the personal
							responsibility of the user to obtain adequate information and
							advice on the risks, the applicable regulations and the operation
							of the crypto-asset investment markets. Likewise, it is up to the
							user to assess and, if necessary, assume the risks associated with
							the contracting in such markets.
						</p>
						<p>
							This Web Site may contain information provided by entities other
							than SIA GUDVA shall not be liable for the accuracy of such
							information nor shall it assume any responsibility for any
							possible damages that may arise from the use of such information.
						</p>
						<p>
							This website contains links to other websites with the intention
							of facilitating and providing the user with better information
							about the matters and activities that constitute the corporate
							purpose of the Company. It is the user’s responsibilityto evaluate
							the content and usefulness of the information published on these
							other websites, without the Company assuming any responsibility
							for the security or privacy of these links or the content of such
							websites.
						</p>
						<p>
							Third parties wishing to establish links to this Website must
							obtain prior written authorization from SIA GUDVA to do so.
						</p>
					</div>
					<div className={styles.description}>
						<h2>Website Usage</h2>
						<p>
							The contents of this website may be downloaded, if available,
							copied and printed for personal use only. The Company is not
							responsible for any discrepancies that may arise between the
							printed version and the electronic version of the information
							contained in this website.
						</p>
						<p>
							Without prejudice to the provisions of the preceding paragraph,
							the copying, duplication, redistribution, electronic reproduction,
							printing, commercialization, marketing or any other use that may
							be made of the contents of this Web site, in whole or in part,
							whether in the form of written or graphic documents, is forbidden,
							even when citing the written or graphic documents; The content of
							this Web site, in whole or in part, whether in the form of written
							or graphic documents, may not be reproduced, reproduced
							electronically, printed, marketed, sold, traded, or otherwise
							exploited in any way, even if the source is cited, without the
							prior written consent of the Company.
						</p>
					</div>
					<div className={styles.description}>
						<h2>Responsibilities</h2>
						<p>
							The Company makes no warranty and shall not be liable for any
							damages, losses, losses, claims or expenses of any nature
							whatsoever arising out of or in connection with the use, inability
							to use or the unlawful, negligent or fraudulent use of this Web
							Site.
						</p>
						<p>
							In order to provide a better service to users, the Company may
							carry out updates and improvements to the content of this Website.
							However, given the free and open nature of the operation of the
							markets to which it refers, the information contained in this
							Website shall in no case have an official nature.
						</p>
						<p>
							SIA GUDVA makes the information contained in its Web Site
							available to the user in accordance with the current state of the
							art, which does not guarantee the total security and privacy of
							said Web Site, nor does it avoid the risk that the same or its
							information service may suffer temporary interruptions, partial
							unavailability or other alterations. The user must also be aware
							that information received or sent through this Web site is
							susceptible to interception.
						</p>
					</div>
					<div className={styles.description}>
						<h2>Applicable Law and Jurisdiction</h2>
						<p>
							This legal notice and the SIA GUDVA website are governed by Latvia
							law. The resolution of any discrepancy that may arise between this
							Company and the user of the service shall be subject to the
							jurisdiction of the Courts and Tribunals of Riga, with express
							waiver by the parties of any other jurisdiction to which they may
							be entitled
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	);
};

export default General;
