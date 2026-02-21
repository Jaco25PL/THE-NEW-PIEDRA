import styles from './PageSkeleton.module.css';

export function PageSkeleton({ fadeOut = false, onFadeEnd, behindNav = false }) {
  return (
    <div
      className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ''}`}
      style={behindNav ? { zIndex: 98 } : undefined}
      onTransitionEnd={onFadeEnd}
    >
      {/* Navbar skeleton */}
      <div className={styles.navbarSkeleton}>
        <div className={styles.navLinks}>
          <div className={`${styles.block} ${styles.navLink}`} />
          <div className={`${styles.block} ${styles.navLink}`} />
        </div>
        <div className={styles.navLogo} />
        <div className={styles.navLinks}>
          <div className={`${styles.block} ${styles.navLink}`} />
          <div className={`${styles.block} ${styles.navLinkWide}`} />
        </div>
      </div>

      {/* Mobile navbar skeleton */}
      <div className={styles.navbarSkeletonMobile}>
        <div className={`${styles.block} ${styles.navHamburger}`} />
      </div>

      {/* Hero skeleton */}
      <div className={styles.hero}>
        <div className={styles.content}>

          <div className={styles.titleGroup}>
            <div className={`${styles.block} ${styles.titleLine1}`} />
            <div className={`${styles.block} ${styles.titleLine2}`} />
          </div>

          <div className={styles.subtitleGroup}>
            <div className={`${styles.block} ${styles.subtitleLine}`} />
            <div className={`${styles.block} ${styles.subtitleLineShort}`} />
          </div>

          <div className={`${styles.block} ${styles.button}`} />

          <div className={styles.features}>
            <div className={styles.featureRow}>
              <div className={`${styles.block} ${styles.check}`} />
              <div className={`${styles.block} ${styles.featureText}`} />
            </div>
            <div className={styles.featureRow}>
              <div className={`${styles.block} ${styles.check}`} />
              <div className={`${styles.block} ${styles.featureText}`} />
            </div>
            <div className={styles.featureRow}>
              <div className={`${styles.block} ${styles.check}`} />
              <div className={`${styles.block} ${styles.featureTextShort}`} />
            </div>
          </div>

          <div className={styles.social}>
            <div className={styles.avatars}>
              <div className={`${styles.block} ${styles.avatar}`} />
              <div className={`${styles.block} ${styles.avatar} ${styles.avatarOffset}`} />
              <div className={`${styles.block} ${styles.avatar} ${styles.avatarOffset}`} />
            </div>
            <div className={styles.ratingGroup}>
              <div className={`${styles.block} ${styles.stars}`} />
              <div className={`${styles.block} ${styles.ratingText}`} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
